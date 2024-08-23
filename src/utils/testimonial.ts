import { getCollection } from 'astro:content';
import type { Testimonial } from '~/types';

let _testimonials: Array<Testimonial>;

export const fetchTestimonials = async () => {
  if (!_testimonials) {
    const testimonialCollection = await getCollection('testimonial');
    _testimonials = testimonialCollection.map((item) => ({ name: item.data.name, testimonial: item.body }));
  }
  return _testimonials;
};
