import { ErrorBox } from '@libs/design';
import { requestService } from '@libs/services';

interface RequestProps {
  params: {
    id: string;
  };
}

const Request = async ({ params }: RequestProps) => {
  const requestId = !isNaN(+params.id) ? +params.id : null;

  if (requestId === null) {
    return <div>شناسه نامعتبر است</div>;
  }

  try {
    const request = await requestService.server.get(requestId);
    return <div>{JSON.stringify(request)}</div>;
  } catch (error) {
    return <ErrorBox error={error} />;
  }
};

export default Request;
