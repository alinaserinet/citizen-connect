import { Avatar, Card, CardBody, CardHeader } from '@libs/components';

const page = () => {
  return (
    <Card>
      <CardHeader>مشخصات فردی</CardHeader>
      <CardBody className="grid grid-cols-8">
        <ul className="col-span-7">
          <li>نام</li>
          <li>نام خانوادگی</li>
        </ul>
        <div className="col-span-1">
          <Avatar className="size-24" />
        </div>
      </CardBody>
    </Card>
  );
};
export default page;
