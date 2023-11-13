// pages/index.tsx
import { useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import MyIcon from '../components/MyIcon'; // Assuming you have a component for MyIcon

const IndexPage = () => {
  useEffect(() => {
    // Basic toast
    toast('Hello World!');

    // Toast with options
    toast('My toast', {
      className: 'my-classname',
      description: 'My description',
      duration: 5000,
      icon: <MyIcon />,
    });

    // Success toast
    toast.success('My success toast');

    // Error toast
    toast.error('My error toast');

    // Action toast
    toast('My action toast', {
      action: {
        label: 'Action',
        onClick: () => console.log('Action!'),
      },
    });

    // Cancel toast
    toast('My cancel toast', {
      cancel: {
        label: 'Cancel',
        onClick: () => console.log('Cancel!'),
      },
    });

    // Promise toast
    const myPromise = new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        resolve({ name: 'Promise' });
        // Reject for error: reject('Error');
      }, 3000);
    });

    toast.promise(myPromise, {
      loading: 'Loading...',
      success: (data) => `${data.name} toast has been added`,
      error: 'Error',
    });

    // Loading toast
    toast.loading('Loading data');

    // Custom toast
    toast(<div>A custom toast with default styling</div>, { duration: 5000 });

    // Headless toast
    toast.custom((t) => (
      <div>
        This is a custom component{' '}
        <button onClick={() => toast.dismiss(t)}>close</button>
      </div>
    ));
  }, []);

  return (
return (
  <div>
    <h1>Toast Examples</h1>
    {/* Basic Toast */}
    <button onClick={() => toast('Hello World!')}>Show Basic Toast</button>

    {/* Toast with Options */}
    <button
      onClick={() =>
        toast('My toast with options', {
          className: 'my-classname',
          description: 'My description',
          duration: 5000,
          icon: <MyIcon />,
        })
      }
    >
      Show Toast with Options
    </button>

    {/* Success Toast */}
    <button onClick={() => toast.success('Success!')}>Show Success Toast</button>

    {/* Error Toast */}
    <button onClick={() => toast.error('Error!')}>Show Error Toast</button>

    {/* Action Toast */}
    <button
      onClick={() =>
        toast('Action toast', {
          action: {
            label: 'Action',
            onClick: () => console.log('Action!'),
          },
        })
      }
    >
      Show Action Toast
    </button>

    {/* Cancel Toast */}
    <button
      onClick={() =>
        toast('Cancel toast', {
          cancel: {
            label: 'Cancel',
            onClick: () => console.log('Cancel!'),
          },
        })
      }
    >
      Show Cancel Toast
    </button>

    {/* Promise Toast */}
    <button
      onClick={() => {
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ name: 'Promise' });
            // Reject for error: reject('Error');
          }, 3000);
        });

        toast.promise(myPromise, {
          loading: 'Loading...',
          success: (data) => `${data.name} toast has been added`,
          error: 'Error',
        });
      }}
    >
      Show Promise Toast
    </button>

    {/* Loading Toast */}
    <button onClick={() => toast.loading('Loading data')}>Show Loading Toast</button>

    {/* Custom Toast */}
    <button
      onClick={() =>
        toast(<div>A custom toast with default styling</div>, { duration: 5000 })
      }
    >
      Show Custom Toast
    </button>

    {/* Headless Toast */}
    <button
      onClick={() =>
        toast.custom((t) => (
          <div>
            This is a custom component{' '}
            <button onClick={() => toast.dismiss(t)}>close</button>
          </div>
        ))
      }
    >
      Show Headless Toast
    </button>

    {/* Toaster component to render the toasts */}
    <Toaster />
  </div>
);

export default IndexPage;

