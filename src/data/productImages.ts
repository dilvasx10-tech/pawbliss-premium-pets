import calmLickMat from '@/assets/lickmat-1.jpg';
import calmLickMat2 from '@/assets/lickmat-2.jpg';
import calmLickMat3 from '@/assets/lickmat-3.jpg';
import calmLickMat4 from '@/assets/lickmat-4.jpg';
import calmLickMat5 from '@/assets/lickmat-5.jpg';
import calmLickMat6 from '@/assets/lickmat-6.jpg';
import calmLickMat7 from '@/assets/lickmat-7.jpg';
import pureFlowFountain from '@/assets/products/pure-flow-fountain.jpg';
import pureFlowFountain2 from '@/assets/products/pure-flow-fountain-2.jpg';
import pureFlowFountain3 from '@/assets/products/pure-flow-fountain-3.jpg';
import pureFlowFountain4 from '@/assets/products/pure-flow-fountain-4.jpg';
import pureFlowFountain5 from '@/assets/products/pure-flow-fountain-5.jpg';
import arcticCoolMat from '@/assets/products/arctic-cool-mat.jpg';
import zenGroomingHammock from '@/assets/products/zen-grooming-hammock.jpg';
import shedawayGlove from '@/assets/glove-1.jpg';
import shedawayGlove2 from '@/assets/glove-2.jpg';
import shedawayGlove3 from '@/assets/glove-3.jpg';
import shedawayGlove4 from '@/assets/glove-4.jpg';
import shedawayGlove5 from '@/assets/glove-5.jpg';
import iqPuzzleFeeder from '@/assets/products/iq-puzzle-feeder.jpg';

export const productImages: Record<string, string> = {
  'calm-lick-mat': calmLickMat,
  'pure-flow-cat-fountain': pureFlowFountain,
  'arctic-cool-mat': arcticCoolMat,
  'zen-grooming-hammock': zenGroomingHammock,
  'shedaway-glove': shedawayGlove,
  'iq-puzzle-feeder': iqPuzzleFeeder,
};

export const productGallery: Record<string, string[]> = {
  'calm-lick-mat': [calmLickMat, calmLickMat2, calmLickMat3, calmLickMat4, calmLickMat5, calmLickMat6, calmLickMat7],
  'pure-flow-cat-fountain': [pureFlowFountain, pureFlowFountain2, pureFlowFountain3, pureFlowFountain4, pureFlowFountain5],
  'shedaway-glove': [shedawayGlove, shedawayGlove2, shedawayGlove3, shedawayGlove4, shedawayGlove5],
};

export function getProductImage(slug: string): string {
  return productImages[slug] || '/placeholder.svg';
}

export function getProductGallery(slug: string): string[] {
  const gallery = productGallery[slug];
  if (gallery) return gallery;
  const main = productImages[slug];
  return main ? [main] : ['/placeholder.svg'];
}
