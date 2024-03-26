import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: photographs,
    error,
    isValidating,
  } = useSWR(
    'https://api.epos-iceland.is/v1/volcano/photographs?start_time=1000-01-01T00%3A00%3A00&end_time=2099-01-01T00%3A00%3A00&bbox=62.8%2C-25.0%2C67.0%2C-12.5&format_type=JSON',
    fetcher
  );

  // Handles error and loading state
  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className="imageinfo grid grid-cols-6 gap-2">
      {photographs &&
        photographs.map((photograph, index) => (
          <div>
            <h1>
              {photograph.meta.event}
              <img key={index} src={photograph.url} alt="webcam" width={100} />
            </h1>
          </div>
        ))}
    </div>
  );
};

export default Swr;
