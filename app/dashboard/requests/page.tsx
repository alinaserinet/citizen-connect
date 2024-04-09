import { ErrorBox } from '@libs/design';
import { EmptyRequests } from '@libs/modules';
import { requestService } from '@libs/services';

const Requests = async () => {
  try {
    const requests = await requestService.server.getAll();

    if (!requests.length) {
      return <EmptyRequests showCreate />;
    }

    return <div>{JSON.stringify(requests)}</div>;
  } catch (error) {
    return <ErrorBox error={error} />;
  }
};

export default Requests;
