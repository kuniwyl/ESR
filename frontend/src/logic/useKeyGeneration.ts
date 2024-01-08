const useKeyGeneration = () => {
  const generateKey = () => {
    return Math.random().toString(36).substr(2, 8);
  };

  return generateKey();
};

export default useKeyGeneration;
