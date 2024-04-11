import { ErrorBox } from '@libs/design';
import { EmptyRequests, RequestsList } from '@libs/modules';
import {
  categoryService,
  departmentService,
  locationService,
  requestService,
} from '@libs/services';

const Requests = async () => {
  try {
    const [requests, categories, locations, departments] = await Promise.all([
      requestService.server.getAll(),
      categoryService.server.getAll(),
      locationService.server.getAll(),
      departmentService.server.getAll(),
    ]);

    if (!requests.length) {
      return <EmptyRequests showCreate />;
    }

    return (
      <RequestsList
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
