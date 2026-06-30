import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from '@/utils/validators';
import { useAuthStore } from '@/store/authStore';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { Mail, Lock, User, ArrowRight, Chrome } from 'lucide-react';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const { register: registerUser, isLoading } = useAuthStore();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setError(null);
    try {
      await registerUser(data.email, data.password, data.displayName);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed');
      toast.error(err.message || 'Registration failed');
    }
  };

  const handleGoogleRegister = () => {
    toast.success('Google registration successful (mock)');
    navigate('/dashboard');
  };

  return (
    <div className="glass-card">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Create Account</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Start trading smarter</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Display Name"
          placeholder="John Doe"
          leftIcon={<User className="w-4 h-4 text-gray-400" />}
          {...register('displayName')}
          error={errors.displayName?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          leftIcon={<Mail className="w-4 h-4 text-gray-400" />}
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          label="Password"
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

        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

        <Button type="submit" className="w-full" isLoading={isLoading} rightIcon={ArrowRight}>
          Create Account
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={handleGoogleRegister}
          leftIcon={<Chrome className="w-4 h-4" />}
        >
          Google
        </Button>
      </div>

      <div className="mt-6 text-center text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-primary-600 dark:text-primary-400 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
