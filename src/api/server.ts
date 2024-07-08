const token = 'Bearer 84278e0d57184f7fef1467dbee2ab2157fd9255e4f995f68';

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://flask-digital-library-vdzq.onrender.com/api/books`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the server');
    }

    return await response.json();
  },
  create: async (data: any = {}) => {
    try {
      const response = await fetch(`https://flask-digital-library-vdzq.onrender.com/api/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response status:', response.status);
        console.error('Error response text:', errorText);
        throw new Error(`Failed to create new data on the server: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Network or server error:', error);
      throw new Error('Failed to create new data on the server');
    }
  },

  update: async (id: string, data: any = {}) => {
    const response = await fetch(`https://flask-digital-library-vdzq.onrender.com/api/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update data on server');
    }

    return await response.json();
  },
  delete: async (id: string) => {
    const response = await fetch(`https://flask-digital-library-vdzq.onrender.com/api/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete data on server');
    }
  }
};
