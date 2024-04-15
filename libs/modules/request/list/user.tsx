import { statuses } from '@data/request';
import {
  Button,
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
import { Eye } from '@phosphor-icons/react/dist/ssr/Eye';
import type { Category, Department, Location, Request } from '@types';
import Link from 'next/link';

interface UserRequestsListProps {
  requests: Request[];
  categories: Category[];
  locations: Location[];
  departments: Department[];
}

export const UserRequestsList = ({
  categories,
  locations,
  departments,
  requests,
}: UserRequestsListProps) => {
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
              <Th />
            </Tr>
          </THead>
          <TBody>
            {requests.map(({ id, title, description, status }) => (
              <Tr key={id}>
                <Td>{title}</Td>
                <Td className="hidden md:table-cell">{description}</Td>
                <Td>{statuses[status]}</Td>
                <Td>
                  <Link href={`/dashboard/requests/${id}`}>
                    <Button genre="link">
                      <Eye size={22} className="text-sky-700" />
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </CardBody>
    </Card>
  );
};
