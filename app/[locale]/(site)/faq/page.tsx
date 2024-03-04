
import Container from '@/components/ui/container'
import React from 'react';
import { faq } from "./data";
import { useTranslations } from "next-intl";

export const metadata = {
    title: 'FAQ',
    description: 'Page Description',
};



export default function FaqPage() {
	const t = useTranslations("Faq");

	return (
		<>
			<section className="featured-products">
				<Container>
					{/* <Breadcrumb /> */}
					<div className="d-flex justify-content-between align-items-center mb-2rem">
						<div className="section-title mb-0">Frequently asked questions</div>
					</div>
					<div className="accordion about-accordion mt-4 mb-4 mb-md-0" id="accordionExample">
						{faq?.map((item: any, index: number) => (
							<div key={item.id} className="accordion-item">
								<h2 className="accordion-header">
									<button className="accordion-button" type="button" data-bs-toggle="collapse"
										data-bs-target={`#${`${item.title}`}`} aria-expanded="false" aria-controls={`${item.title}`}>
										{t(item.title)}
									</button>
								</h2>
								<div id={`${item.title}`} className="accordion-collapse collapse"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										{t(item.content)}
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>
		</>
	)
}
