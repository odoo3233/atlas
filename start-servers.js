const { spawn } = require('child_process');
const path = require('path');

console.log('========================================');
console.log('   Atlas Al-Sharq - Server Starter');
console.log('========================================');
console.log('');

// تشغيل الخادم الخلفي
console.log('الخطوة 1: تشغيل قاعدة البيانات...');
console.log('تأكد من تشغيل PostgreSQL...');
console.log('');

console.log('الخطوة 2: تشغيل الخادم الخلفي...');
const backendProcess = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'backend'),
    stdio: 'inherit',
    shell: true
});

console.log('الخطوة 3: تشغيل الواجهة الأمامية...');
const frontendProcess = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
});

console.log('');
console.log('========================================');
console.log('    تم تشغيل المشروع!');
console.log('========================================');
console.log('');
console.log('المشروع يعمل الآن على:');
console.log('- الواجهة الأمامية: http://localhost:3000');
console.log('- الواجهة الخلفية: http://localhost:5001');
console.log('');

// فتح المتصفح بعد 5 ثوان
setTimeout(() => {
    const { exec } = require('child_process');
    exec('start http://localhost:3000', (error) => {
        if (error) {
            console.log('لا يمكن فتح المتصفح تلقائياً. افتح المتصفح يدوياً على: http://localhost:3000');
        } else {
            console.log('تم فتح المتصفح!');
        }
    });
}, 5000);

// التعامل مع إغلاق البرنامج
process.on('SIGINT', () => {
    console.log('\nإغلاق الخوادم...');
    backendProcess.kill();
    frontendProcess.kill();
    process.exit();
});

