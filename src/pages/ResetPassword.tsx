import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, ResetPasswordFormData } from '@/utils/validators';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { Lock, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    // Mock password reset
    if (!token) {
      toast.error('Invalid or missing reset token');
      return;
    }
    toast.success('Password reset successfully!');
    setIsSubmitted(true);
    setTimeout(() => navigate('/login'), 3000);
  };

  if (!token) {
    return (
      <div className="glass-card text-center">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">Invalid Reset Link</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          The password reset link is missing or invalid.
        </p>
        <Link to="/forgot-password" className="inline-block mt-6 text-primary-600 dark:text-primary-400 hover:underline">
          Request a new link
        </Link>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="glass-card text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Password Reset</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Your password has been successfully reset.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
          Redirecting to login...
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Set New Password</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Enter your new password below</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="New Password"
          type="password"
          placeholder="••••••••"
          leftIcon={<Lock className="w-4 h-4 text-gray-400" />}
          {...register('password')}
          error={errors.password?.message}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          leftIcon={<Lock className="w-4 h-4 text-gray-400" />}
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
