import { requestService } from '@libs/services';

const Requests = async () => {
  const requests = await requestService.server.getAll();
  return <div>{JSON.stringify(requests)}</div>;
};

export default Requests;
