import calmLickMat from '@/assets/products/calm-lick-mat.jpg';
import pureFlowFountain from '@/assets/products/pure-flow-fountain.jpg';
import pureFlowFountain2 from '@/assets/products/pure-flow-fountain-2.jpg';
import pureFlowFountain3 from '@/assets/products/pure-flow-fountain-3.jpg';
import pureFlowFountain4 from '@/assets/products/pure-flow-fountain-4.jpg';
import pureFlowFountain5 from '@/assets/products/pure-flow-fountain-5.jpg';
import arcticCoolMat from '@/assets/products/arctic-cool-mat.jpg';
import zenGroomingHammock from '@/assets/products/zen-grooming-hammock.jpg';
import shedawayGlove from '@/assets/products/shedaway-glove.jpg';
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
  'pure-flow-cat-fountain': [pureFlowFountain, pureFlowFountain2, pureFlowFountain3, pureFlowFountain4, pureFlowFountain5],
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
