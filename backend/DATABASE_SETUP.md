# دليل تشغيل قاعدة البيانات PostgreSQL

## المشكلة الحالية
```
Error: connect ECONNREFUSED ::1:5432
Error: connect ECONNREFUSED 127.0.0.1:5432
```

هذا يعني أن قاعدة البيانات PostgreSQL غير مشغلة.

## الحلول الممكنة:

### 1. تشغيل PostgreSQL من Services (Windows)
1. اضغط `Win + R` واكتب `services.msc`
2. ابحث عن خدمة `postgresql-x64-15` أو `postgresql`
3. انقر بزر الماوس الأيمن واختر "Start"

### 2. تشغيل PostgreSQL من pgAdmin
1. افتح برنامج pgAdmin
2. انقر بزر الماوس الأيمن على الخادم
3. اختر "Connect Server"

### 3. تشغيل PostgreSQL من Command Line
```bash
# إذا كان PostgreSQL مثبت في المسار الافتراضي
"C:\Program Files\PostgreSQL\15\bin\pg_ctl.exe" start -D "C:\Program Files\PostgreSQL\15\data"

# أو
net start postgresql-x64-15
```

### 4. إنشاء قاعدة البيانات
بعد تشغيل PostgreSQL، قم بإنشاء قاعدة البيانات:

```sql
-- افتح psql أو pgAdmin
CREATE DATABASE atlas_db;
CREATE USER atlas_user WITH PASSWORD 'atlas_password';
GRANT ALL PRIVILEGES ON DATABASE atlas_db TO atlas_user;
```

### 5. تحديث إعدادات الاتصال
في ملف `backend/src/index.js`، تأكد من صحة إعدادات الاتصال:

```javascript
const pool = new Pool({
  user: 'atlas_user',
  host: 'localhost',
  database: 'atlas_db',
  password: 'atlas_password',
  port: 5432,
});
```

## التحقق من حالة قاعدة البيانات
```bash
# فحص المنافذ المفتوحة
netstat -an | findstr :5432

# اختبار الاتصال
psql -h localhost -U atlas_user -d atlas_db
```

## إذا لم يكن PostgreSQL مثبتاً
1. قم بتحميل PostgreSQL من الموقع الرسمي
2. اتبع خطوات التثبيت
3. تأكد من تشغيل الخدمة
4. أنشئ قاعدة البيانات والمستخدم

## ملاحظات مهمة
- تأكد من أن كلمة المرور صحيحة
- تأكد من أن المستخدم لديه صلاحيات كافية
- تأكد من أن قاعدة البيانات موجودة
- تأكد من أن PostgreSQL يعمل على المنفذ 5432
