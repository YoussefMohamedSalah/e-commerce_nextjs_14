"use client"

import React from 'react';
import Image from '../../ui/image';
import { useSession } from 'next-auth/react';
import Link from '@/components/ui/link';


interface Props {
  tThanks: any;
};

function ThanksForYourOrder({ tThanks }: Props) {
  const session = useSession();

  return (
    <section className="thanks-for-your-order pattern-bg mt--2rem">
      <div className="container-fluid px-8">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 text-center">
          <div className="thanks-wrapper">
            <div className="i">
              <div>
                <Image width={150} height={150} src="/assets/animated-box.gif" alt="" />
                <div className="fz24 fw-600 text-black mb24 mt-4">{tThanks.thanks_title}</div>
                <div className="fz14 text-secondary mb-4">{tThanks.details_sent} {session.data?.user?.email!}</div>
                <Link href="/" className="btn btn-primary w-100 py-3 mt-5">{tThanks.continue_shopping}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThanksForYourOrder;
