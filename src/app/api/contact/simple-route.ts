import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'جميع الحقول المطلوبة يجب أن تكون مملوءة' },
        { status: 400 }
      );
    }

    // Create contact message object
    const contactMessage = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      subject,
      message,
      timestamp: new Date().toLocaleString('ar-SA'),
      targetEmail: 'contact@atlasecon.com',
      status: 'جديدة'
    };

    // Save to file (for simple implementation)
    const messagesFile = path.join(process.cwd(), 'contact-messages.json');
    let messages = [];
    
    try {
      if (fs.existsSync(messagesFile)) {
        const fileContent = fs.readFileSync(messagesFile, 'utf8');
        messages = JSON.parse(fileContent);
      }
    } catch (error) {
      console.log('Creating new messages file');
    }

    messages.push(contactMessage);
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));

    // Log to console for immediate viewing
    console.log('\n=== رسالة جديدة من نموذج التواصل ===');
    console.log('🔹 الاسم:', name);
    console.log('📧 الإيميل:', email);
    console.log('📱 الهاتف:', phone || 'غير محدد');
    console.log('🏢 الشركة:', company || 'غير محدد');
    console.log('📋 الموضوع:', subject);
    console.log('💬 الرسالة:', message);
    console.log('⏰ التاريخ:', new Date().toLocaleString('ar-SA'));
    console.log('📬 يجب إرسال هذه الرسالة إلى: contact@atlasecon.com');
    console.log('💾 تم حفظ الرسالة في:', messagesFile);
    console.log('================================================\n');

    return NextResponse.json({ 
      success: true, 
      message: 'تم إرسال رسالتك بنجاح وحفظها للمراجعة',
      messageId: contactMessage.id
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }
}
