import { Ring } from '@uiball/loaders';

export default function LoadingSpinner() {
    return <div className="w-fit mx-auto text-nosferatu-50">
        <Ring size={40} lineWeight={5} speed={2} color="white" />
      </div>
}