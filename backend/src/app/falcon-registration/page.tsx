'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FalconRegistration() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    visitorsCount: '1',
    visitDate: '',
    specialRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                تم التسجيل بنجاح! 🎉
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                شكراً لك على التسجيل في معرض الصقور والصيد السعودي الدولي 2025
              </p>
              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-amber-800 mb-3">تفاصيل التسجيل:</h3>
                <div className="space-y-2 text-sm text-amber-700">
                  <p><strong>الاسم:</strong> {formData.fullName}</p>
                  <p><strong>البريد الإلكتروني:</strong> {formData.email}</p>
                  <p><strong>عدد الزوار:</strong> {formData.visitorsCount}</p>
                  <p><strong>تاريخ الزيارة:</strong> {formData.visitDate}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                سيتم إرسال تأكيد التسجيل إلى بريدك الإلكتروني مع كافة التفاصيل
              </p>
              <Link href="/">
                <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
                  العودة للصفحة الرئيسية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
              <ArrowLeft className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
              العودة للصفحة الرئيسية
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              تسجيل معرض الصقور والصيد السعودي الدولي 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              سجل الآن لحضور أكبر معرض للصقور والصيد في الشرق الأوسط
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-800 rounded-2xl p-6 text-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">تفاصيل المعرض</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-amber-300 ml-3 rtl:ml-0 rtl:mr-3" />
                    <div>
                      <p className="font-semibold">التاريخ</p>
                      <p className="text-amber-200">٢ – ١١ أكتوبر ٢٠٢٥</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-amber-300 ml-3 rtl:ml-0 rtl:mr-3" />
                    <div>
                      <p className="font-semibold">الموقع</p>
                      <p className="text-amber-200">مركز الرياض للمعارض</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-amber-300 ml-3 rtl:ml-0 rtl:mr-3" />
                    <div>
                      <p className="font-semibold">المتوقع</p>
                      <p className="text-amber-200">50K+ زائر</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <h3 className="font-semibold mb-3">المعرض يشمل:</h3>
                  <ul className="space-y-2 text-sm text-amber-200">
                    <li>• أفضل أنواع الصقور</li>
                    <li>• أحدث المعدات والتقنيات</li>
                    <li>• عروض حية للصقور</li>
                    <li>• مسابقات وورش عمل</li>
                    <li>• معارض تجارية</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">نموذج التسجيل</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="example@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="+966 5X XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الشركة / المؤسسة
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="اسم الشركة (اختياري)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        المنصب الوظيفي
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="المنصب الوظيفي (اختياري)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        عدد الزوار *
                      </label>
                      <select
                        name="visitorsCount"
                        value={formData.visitorsCount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="1">1 زائر</option>
                        <option value="2">2 زائر</option>
                        <option value="3">3 زوار</option>
                        <option value="4">4 زوار</option>
                        <option value="5">5 زوار</option>
                        <option value="6+">6+ زوار</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        تاريخ الزيارة المفضل *
                      </label>
                      <select
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">اختر التاريخ</option>
                        <option value="2025-10-02">٢ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-03">٣ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-04">٤ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-05">٥ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-06">٦ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-07">٧ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-08">٨ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-09">٩ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-10">١٠ أكتوبر ٢٠٢٥</option>
                        <option value="2025-10-11">١١ أكتوبر ٢٠٢٥</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      متطلبات خاصة أو ملاحظات
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="أي متطلبات خاصة أو ملاحظات (اختياري)"
                    />
                  </div>
                  
                  <div className="bg-amber-50 rounded-xl p-4">
                    <h3 className="font-semibold text-amber-800 mb-2">معلومات مهمة:</h3>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• التسجيل مجاني</li>
                      <li>• ساعات العمل: 9:00 ص - 6:00 م</li>
                      <li>• يرجى الحضور قبل 30 دقيقة من الموعد المحدد</li>
                      <li>• سيتم إرسال تأكيد التسجيل عبر البريد الإلكتروني</li>
                    </ul>
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 text-white hover:bg-amber-600 font-semibold text-lg py-4"
                  >
                    {isSubmitting ? 'جاري التسجيل...' : 'تأكيد التسجيل'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
