import { ErrorBox } from '@libs/design';
import { CreateRequestBox } from '@libs/modules';
import {
  categoryService,
  departmentService,
  locationService,
} from '@libs/services';

const CreateRequest = async () => {
  try {
    const [departments, categories, locations] = await Promise.all([
      departmentService.server.getAll(),
      categoryService.server.getAll(),
      locationService.server.getAll(),
    ]);

    return (
      <CreateRequestBox
        categories={categories}
        departments={departments}
        locations={locations}
      />
    );
  } catch (error) {
    return <ErrorBox error={error} />;
  }
};

export default CreateRequest;
