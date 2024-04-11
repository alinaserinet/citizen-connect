import { useSetAlert } from '@libs/providers';
import { requestService } from '@libs/services';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { CreateRequestForm } from './form-type';

export const useCreateRequestHandler = () => {
  const setAlert = useSetAlert();
  const router = useRouter();

  const handleCreateRequest: SubmitHandler<CreateRequestForm> = async data => {
    try {
      const res = await requestService.client.create({
        category: +data.category,
        department: +data.department,
        location: +data.location,
        priority: +data.priority,
        title: data.title,
        description: data.description,
      });
      console.log(res);

      setAlert({
        message: 'عملیات ناموفق',
        color: 'success',
        hint: 'درخواست ثبت شد',
      });
      router.replace('/dashboard/requests');
      router.refresh();
    } catch (error) {
      if (typeof error === 'string') {
        setAlert({
          message: 'عملیات ناموفق',
          color: 'error',
          hint: error,
        });
      }
    }
  };

  return handleCreateRequest;
};
