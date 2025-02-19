import { Mail, Phone, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    setIsSubmitting(true);
    try {
      // Send the form data to the Netlify function
      const response = await fetch('./send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="mx-auto mb-4 text-blue-500" size={24} />
              <p className="text-gray-600">dharunmax@gmail.com</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-4 text-blue-500" size={24} />
              <p className="text-gray-600">+1 689 346 5100</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-blue-500" size={24} />
              <p className="text-gray-600">Winter Springs, FL, USA</p>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
