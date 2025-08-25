"use client"

import React, { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Lock, User } from "lucide-react"

function LoginPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useTranslation()
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Simple authentication - in production, use proper API authentication
      if (credentials.username === "admin" && credentials.password === "atlas2024") {
        // Set auth cookie
        document.cookie = `admin-auth=atlas-admin-2024; path=/; max-age=${60 * 60 * 24}` // 24 hours
        
        // Redirect to admin or original page
        const redirect = searchParams?.get('redirect') || '/admin'
        router.push(redirect)
      } else {
        setError(t('login.invalidCredentials') || 'اسم المستخدم أو كلمة المرور غير صحيحة')
      }
    } catch (error) {
      setError(t('login.error') || 'حدث خطأ في تسجيل الدخول')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center py-12 px-4 bg-gray-50">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t('login.title') || 'تسجيل دخول الإدارة'}
              </h2>
              <p className="text-gray-600 mt-2">
                {t('login.subtitle') || 'أدخل بيانات الدخول للوصول إلى لوحة التحكم'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('login.username') || 'اسم المستخدم'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('login.usernamePlaceholder') || 'أدخل اسم المستخدم'}
                    required
                  />
                  <User className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('login.password') || 'كلمة المرور'}
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('login.passwordPlaceholder') || 'أدخل كلمة المرور'}
                    required
                  />
                  <Lock className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading}
              >
                {loading 
                  ? t('login.loggingIn') || 'جاري تسجيل الدخول...'
                  : t('login.login') || 'تسجيل الدخول'
                }
              </Button>

              <div className="text-center text-sm text-gray-600">
                <p className="mb-2">{t('login.demo') || 'بيانات الدخول التجريبية:'}</p>
                <p>{t('login.demoUsername') || 'اسم المستخدم:'} admin</p>
                <p>{t('login.demoPassword') || 'كلمة المرور:'} atlas2024</p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}
