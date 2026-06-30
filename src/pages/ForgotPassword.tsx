import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, ForgotPasswordFormData } from '@/utils/validators';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { Mail, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    // Mock password reset
    toast.success(`Password reset email sent to ${data.email}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="glass-card text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Check your email</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          We've sent a password reset link to your email address.
        </p>
        <Link to="/login" className="inline-block mt-6 text-primary-600 dark:text-primary-400 hover:underline">
          Return to login
        </Link>
      </div>
    );
  }

  return (
    <div className="glass-card">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Reset Password</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Enter your email and we'll send you a reset link
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          leftIcon={<Mail className="w-4 h-4 text-gray-400" />}
          {...register('email')}
          error={errors.email?.message}
        />

        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link to="/login" className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
