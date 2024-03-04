type LoginResponse = {
  success: boolean;
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    _token: string;
    permissions: {
      withTimestamps: boolean
    }
  };
  message: string;
};