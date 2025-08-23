# دليل رفع المشروع على الإنترنت

## الوضع الحالي
- **Frontend**: يعمل محلياً على http://localhost:3002
- **Backend**: مرفوع على https://atlas-ha7k.onrender.com

## رفع Frontend على Vercel (مجاني)

### 1. إنشاء حساب Vercel
1. اذهب إلى https://vercel.com
2. سجل دخول بحساب GitHub

### 2. رفع المشروع
```bash
# تثبيت Vercel CLI
npm i -g vercel

# في مجلد المشروع
vercel

# اتبع التعليمات:
# - اختر اسم المشروع
# - اختر الإعدادات الافتراضية
```

### 3. إعداد متغيرات البيئة
في لوحة تحكم Vercel، أضف:
```
NEXT_PUBLIC_API_URL=https://atlas-ha7k.onrender.com
ADMIN_TOKEN=atlas-admin-2024
```

## رفع Frontend على Netlify (بديل مجاني)

### 1. Build المشروع
```bash
npm run build
```

### 2. رفع على Netlify
1. اذهب إلى https://app.netlify.com
2. اسحب مجلد `.next` إلى الصفحة
3. أو استخدم GitHub للنشر التلقائي

## معلومات مهمة

### المنافذ المستخدمة
- **Development**: 3000, 3001, أو 3002 (حسب المتاح)
- **Production**: 443 (HTTPS) أو 80 (HTTP)

### روابط API
تأكد من تحديث `NEXT_PUBLIC_API_URL` في:
- `.env.local` للتطوير المحلي
- إعدادات الاستضافة للإنتاج

### الأمان
- لا ترفع ملف `.env.local` على GitHub
- استخدم HTTPS في الإنتاج
- قم بتغيير كلمة مرور الإدارة الافتراضية

## الخطوات التالية

1. **للتجربة المحلية**: استمر باستخدام http://localhost:3002
2. **للنشر العام**: اتبع خطوات Vercel أو Netlify أعلاه
3. **للإنتاج الكامل**: 
   - استخدم domain خاص
   - أضف SSL certificate
   - قم بإعداد CDN للأداء الأفضل
