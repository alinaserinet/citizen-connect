import {
  Button,
  Card,
  CardBody,
  Input,
  Label,
  Select,
  Textarea,
} from '@libs/components';
import type { Category, Department, Location } from '@types';

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
  const categoriesOptions = categories.map(({ id, title }) => ({
    label: title,
    value: id,
  }));
  const departmentsOptions = departments.map(({ id, title }) => ({
    label: title,
    value: id,
  }));
  const locationsOptions = locations.map(({ id, title }) => ({
    label: title,
    value: id,
  }));

  const prioritiesOptions = [
    {
      label: 'کم',
      value: 0,
    },
    {
      label: 'متوسط',
      value: 2,
    },
    {
      label: 'زیاد',
      value: 3,
    },
  ];

  return (
    <>
      <Card>
        <CardBody className="grid grid-cols-3 gap-6">
          <div>
            <Label htmlFor="location">منطقه</Label>
            <Select id="location" options={locationsOptions} />
          </div>
          <div>
            <Label htmlFor="department">بخش</Label>
            <Select id="department" options={departmentsOptions} />
          </div>
          <div>
            <Label htmlFor="category">دسته بندی</Label>
            <Select id="category" options={categoriesOptions} />
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="flex flex-col gap-6">
          <div>
            <Label htmlFor="title">عنوان درخواست</Label>
            <Input id="title" />
          </div>
          <div>
            <Label htmlFor="description">توضیحات</Label>
            <Textarea id="description" rows={5} />
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="grid grid-cols-3 items-end gap-6">
          <div>
            <Label htmlFor="title">اولویت</Label>
            <Select id="category" options={prioritiesOptions} />
          </div>
          <Button color="success" className="col-start-3">
            ثبت درخواست
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
