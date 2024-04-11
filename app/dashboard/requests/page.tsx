import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
} from '@libs/components';
import { ErrorBox } from '@libs/design';
import { EmptyRequests } from '@libs/modules';
import { requestService } from '@libs/services';
import Link from 'next/link';

const Requests = async () => {
  try {
    const requests = await requestService.server.getAll();

    if (!requests.length) {
      return <EmptyRequests showCreate />;
    }

    return (
      <Card>
        <CardHeader className="flex items-center justify-between bg-white">
          <h1>درخواست های شما</h1>
          <Link href="/dashboard/requests/create" className=" text-blue-800">
            ثبت درخواست جدید
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          <Table>
            <THead>
              <Tr>
                <Th>عنوان</Th>
                <Th className="hidden md:table-cell">توضیحات</Th>
                <Th>وضعیت</Th>
              </Tr>
            </THead>
            <TBody>
              {requests.map(({ id, title, description }) => (
                <Tr key={id}>
                  <Td>{title}</Td>
                  <Th className="hidden md:table-cell">{description}</Th>
                  <Th>در انتظار بررسی</Th>
                </Tr>
              ))}
            </TBody>
          </Table>
        </CardBody>
      </Card>
    );
  } catch (error) {
    return <ErrorBox error={error} />;
  }
};

export default Requests;
