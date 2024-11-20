// src/app/contact/page.tsx
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { FloatingShapes } from '@/components/about/DesignElements';
import { AnimatedBackground } from '@/components/about/AnimatedBackground';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 pb-16 relative">
      <AnimatedBackground />
      <FloatingShapes />
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Let&apos;s Connect! 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </main>
  );
}