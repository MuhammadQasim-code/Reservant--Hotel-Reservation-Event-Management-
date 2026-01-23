import { Button, Input, Form } from 'antd';
import  { toast, Toaster } from 'react-hot-toast';

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Contact:', values);
    toast.success('Message sent! We will get back to you soon.');
    form.resetFields();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      
      <div className="bg-slate-800 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300">We'd love to hear from you.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-3">
                  <span className="text-amber-600 text-xl">📍</span> 
                  123 Culinary Avenue, Food District, FL 33101
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-amber-600 text-xl">📞</span> 
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-amber-600 text-xl">✉️</span> 
                  support@reservent.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-amber-600 text-xl">⏰</span> 
                  Mon - Sun: 10:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            
            
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-t-amber-500">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                <Input size="large" placeholder="Your Name" />
              </Form.Item>
              
              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Valid email required' }]}>
                <Input size="large" placeholder="your@email.com" />
              </Form.Item>

              <Form.Item label="Subject" name="subject" rules={[{ required: true }]}>
                <Input size="large" placeholder="Inquiry / Feedback" />
              </Form.Item>

              <Form.Item label="Message" name="message" rules={[{ required: true }]}>
                <TextArea rows={5} placeholder="How can we help you?" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block className="bg-slate-800 hover:bg-slate-700! h-12 font-bold">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>

        </div>
      </div>
    </div>
  );
}