import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DogInfoModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (info: { name: string; breed: string; age: string }) => void;
}

const popularBreeds = [
  'Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog',
  'Bulldog', 'Poodle', 'Beagle', 'Rottweiler', 'Dachshund', 'Yorkshire Terrier',
  'Boxer', 'Siberian Husky', 'Cavalier King Charles', 'Shih Tzu', 'Pomeranian',
  'Border Collie', 'Australian Shepherd', 'Chihuahua', 'Pitbull', 'Mixed Breed',
  'Other',
];

const ageOptions = [
  'Puppy (0–1 year)', 'Young (1–3 years)', 'Adult (3–7 years)', 'Senior (7+ years)',
];

const DogInfoModal = ({ open, onClose, onSubmit }: DogInfoModalProps) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const canSubmit = name.trim() && breed && age;

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit({ name: name.trim(), breed, age });
    setName('');
    setBreed('');
    setAge('');
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md rounded-2xl border-0 p-0 overflow-hidden" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="px-6 pt-6 pb-2 text-center">
          <div className="text-4xl mb-2">🐾</div>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold" style={{ color: '#2D4A3E' }}>
              Let's Customize Your Kit!
            </DialogTitle>
            <DialogDescription className="text-sm mt-1" style={{ color: '#666' }}>
              Tell us about your pup so we can personalize their calm kit experience
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: '#2D4A3E' }}>
              Dog's Name
            </label>
            <Input
              placeholder="e.g. Bella, Max, Luna…"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
              className="rounded-lg border-gray-300 focus:ring-2"
              style={{ borderColor: '#d1d5db' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: '#2D4A3E' }}>
              Breed
            </label>
            <Select value={breed} onValueChange={setBreed}>
              <SelectTrigger className="rounded-lg" style={{ borderColor: '#d1d5db' }}>
                <SelectValue placeholder="Select breed" />
              </SelectTrigger>
              <SelectContent>
                {popularBreeds.map((b) => (
                  <SelectItem key={b} value={b}>{b}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: '#2D4A3E' }}>
              Age
            </label>
            <Select value={age} onValueChange={setAge}>
              <SelectTrigger className="rounded-lg" style={{ borderColor: '#d1d5db' }}>
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                {ageOptions.map((a) => (
                  <SelectItem key={a} value={a}>{a}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="w-full py-3.5 rounded-xl text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: '#C8714A', color: '#FAFAF7' }}
          >
            CUSTOMIZE MY KIT 🐾
          </button>

          <p className="text-center text-[11px]" style={{ color: '#999' }}>
            🔒 We'll never share your info · 30-day money back guarantee
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DogInfoModal;
