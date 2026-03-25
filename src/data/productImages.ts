import calmLickMat from '@/assets/products/calm-lick-mat.jpg';
import pureFlowFountain from '@/assets/products/pure-flow-fountain.jpg';
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

export function getProductImage(slug: string): string {
  return productImages[slug] || '/placeholder.svg';
}
