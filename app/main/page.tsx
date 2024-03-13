import { Card } from '@libs/components';
import { Atom } from '@phosphor-icons/react/dist/ssr/Atom';
import { Calculator } from '@phosphor-icons/react/dist/ssr/Calculator';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className="relative h-64">
        <Image
          src="/slide1.jpg"
          alt="slide"
          fill
          objectFit="cover"
          objectPosition="top"
          className="rounded-xl shadow-md"
        />
      </div>
      <div className="relative">
        <div className="absolute -top-8 flex w-full items-center justify-center gap-6 px-6">
          <Card className="flex size-16 items-center justify-center">
            <Phone size={24} />
          </Card>
          <Card className="flex size-16 items-center justify-center">
            <Calculator size={24} />
          </Card>
          <Card className="flex size-16 items-center justify-center">
            <Atom size={24} />
          </Card>
        </div>
      </div>
    </>
  );
};
export default page;
