import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PublishIcon from '@mui/icons-material/Publish';

const MyComponent = () => {
    const router = useRouter();

    const handleOpenPreview = () => {
        // Handle preview action
    };

    const handleOpenPublish = () => {
        // Handle publish action
    };

    return (
        <div className="h-[8%] flex justify-between items-center px-0 py-1 border-[1px]">
            <IconButton
                onClick={() => router.push('/Dashboard')}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
            >
                <ArrowBackIcon />
            </IconButton>
            <div className="flex">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
                    onClick={handleOpenPreview}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Preview
                </button>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 rounded-md mr-2 flex items-center border-black border-[1px]"
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"></path>
                        <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2h-8v-5z"></path>
                    </svg>
                    Save
                </button>
                <button
                    className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold py-1 px-2 rounded-md shadow-xl flex items-center"
                    onClick={handleOpenPublish}
                >
                    <PublishIcon className="h-5 w-5 mr-2" />
                    Publish
                </button>
            </div>
        </div>
    );
};

export default MyComponent;
