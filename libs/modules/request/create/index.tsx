'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  FormFieldError,
  Input,
  Label,
  Select,
  Textarea,
} from '@libs/components';
import type { Category, Department, Location } from '@types';
import { useForm } from 'react-hook-form';

import { useCreateRequestHandler } from './form-handler';
import { createFormSchema } from './form-shema';
import type { CreateRequestForm } from './form-type';
import {
  getPrioritiesOptions,
  prepareCategoriesOptions,
  prepareDepartmentsOptions,
  prepareLocationOptions,
} from './options';

interface CreateRequestBoxProps {
  departments: Department[];
  locations: Location[];
  categories: Category[];
}

export const CreateRequestBox = ({
  categories,
  departments,
  locations,
}: CreateRequestBoxProps) => {
  const categoriesOptions = prepareCategoriesOptions(categories);
  const departmentsOptions = prepareDepartmentsOptions(departments);
  const locationsOptions = prepareLocationOptions(locations);
  const prioritiesOptions = getPrioritiesOptions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRequestForm>({
    resolver: zodResolver(createFormSchema),
  });

  const handleCreateRequest = useCreateRequestHandler();

  return (
    <Card>
      <CardHeader>ثبت درخواست جدید</CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(handleCreateRequest)}>
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-3">
            <div>
              <Label htmlFor="location">منطقه</Label>
              <Select
                id="location"
                options={locationsOptions}
                {...register('location')}
              />
              <FormFieldError message={errors.location?.message} />
            </div>
            <div>
              <Label htmlFor="department">بخش</Label>
              <Select
                id="department"
                options={departmentsOptions}
                {...register('department')}
              />
              <FormFieldError message={errors.department?.message} />
            </div>
            <div>
              <Label htmlFor="category">دسته بندی</Label>
              <Select
                id="category"
                options={categoriesOptions}
                {...register('category')}
              />
              <FormFieldError message={errors.category?.message} />
            </div>
            <Divider className="lg:col-span-3" />
            <div className="lg:col-span-3">
              <Label htmlFor="title">عنوان درخواست</Label>
              <Input id="title" {...register('title')} />
              <FormFieldError message={errors.title?.message} />
            </div>
            <div className="lg:col-span-3">
              <Label htmlFor="description">توضیحات</Label>
              <Textarea
                id="description"
                rows={5}
                {...register('description')}
              />
              <FormFieldError message={errors.description?.message} />
            </div>
            <Divider className="lg:col-span-3" />
            <div>
              <Label htmlFor="title">اولویت</Label>
              <Select
                id="category"
                options={prioritiesOptions}
                {...register('priority')}
              />
              <FormFieldError message={errors.priority?.message} />
            </div>
            <Button color="success" className="lg:col-start-3" type="submit">
              ثبت درخواست
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};
