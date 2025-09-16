import { NextRequest, NextResponse } from 'next/server';

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

    // Log the contact form submission (for now, until email is configured)
    console.log('=== رسالة جديدة من نموذج التواصل ===');
    console.log('الاسم:', name);
    console.log('الإيميل:', email);
    console.log('الهاتف:', phone || 'غير محدد');
    console.log('الشركة:', company || 'غير محدد');
    console.log('الموضوع:', subject);
    console.log('الرسالة:', message);
    console.log('التاريخ:', new Date().toLocaleString('ar-SA'));
    console.log('يجب إرسال هذه الرسالة إلى: contact@atlasecon.com');
    console.log('================================================');

    // TODO: إعداد إرسال الإيميل الفعلي
    // للحصول على إرسال إيميل فعلي، يرجى:
    // 1. إعداد SMTP في ملف .env.local
    // 2. إلغاء التعليق على كود nodemailer أدناه
    
    /*
    // إرسال إيميل فعلي (يتطلب إعداد SMTP)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@atlasecon.com',
      subject: `رسالة جديدة من الموقع: ${subject}`,
      html: `<div dir="rtl">
        <h2>رسالة جديدة من موقع أطلس الشرق</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الإيميل:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${phone || 'غير محدد'}</p>
        <p><strong>الشركة:</strong> ${company || 'غير محدد'}</p>
        <p><strong>الموضوع:</strong> ${subject}</p>
        <p><strong>الرسالة:</strong> ${message}</p>
      </div>`,
      replyTo: email,
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'تم إرسال رسالتك بنجاح' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }
}
