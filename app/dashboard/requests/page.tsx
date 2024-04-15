import { authConfig } from '@config';
import { ErrorBox } from '@libs/design';
import {
  EmployeeRequestsList,
  EmptyRequests,
  UserRequestsList,
} from '@libs/modules';
import {
  categoryService,
  departmentService,
  locationService,
  requestService,
} from '@libs/services';
import { jwtDecode } from 'jwt-decode';
import { getServerSession } from 'next-auth';

const Requests = async () => {
  const session = await getServerSession(authConfig);
  const { isEmployee } = jwtDecode<{ isEmployee: boolean }>(
    session?.user.accessToken ?? '',
  );

  try {
    const [requests, categories, locations, departments] = await Promise.all([
      requestService.server.getAll(),
      categoryService.server.getAll(),
      locationService.server.getAll(),
      departmentService.server.getAll(),
    ]);

    if (!requests.length) {
      return <EmptyRequests showCreate={!isEmployee} />;
    }

    if (isEmployee) {
      return (
        <EmployeeRequestsList
          requests={requests}
          categories={categories}
          locations={locations}
          departments={departments}
        />
      );
    }

    return (
      <UserRequestsList
        requests={requests}
        categories={categories}
        locations={locations}
        departments={departments}
      />
    );
  } catch (error) {
    return <ErrorBox error={error} />;
  }
};

export default Requests;
