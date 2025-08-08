import { useMutation, useQuery, useQueryClient } from 'react-query';
import { apiService } from '../services/api';
import toast from 'react-hot-toast';

// Types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  budget?: string;
  timeline?: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  budget: string;
  timeline: string;
  status: string;
  ipAddress: string;
  userAgent?: string;
  readAt?: string;
  repliedAt?: string;
  createdAt: string;
  timeSinceCreation?: string;
}

export interface ContactStats {
  totalContacts: number;
  newContacts: number;
  readContacts: number;
  repliedContacts: number;
  closedContacts: number;
  contactsByMonth: { _id: { year: number; month: number }; count: number }[];
  recentContacts: Contact[];
}

// Query keys
export const contactKeys = {
  all: ['contacts'] as const,
  lists: () => [...contactKeys.all, 'list'] as const,
  list: (filters: any) => [...contactKeys.lists(), filters] as const,
  details: () => [...contactKeys.all, 'detail'] as const,
  detail: (id: string) => [...contactKeys.details(), id] as const,
  stats: () => [...contactKeys.all, 'stats'] as const,
};

// Hooks
export const useSubmitContact = () => {
  return useMutation({
    mutationFn: (data: ContactForm) => apiService.submitContact(data),
    onSuccess: (response) => {
      toast.success(response.data.message || 'Message sent successfully!');
    },
    onError: (error: any) => {
      const message = error.response?.data?.error || 'Failed to send message';
      toast.error(message);
    },
  });
};

export const useContacts = (params?: any) => {
  return useQuery({
    queryKey: contactKeys.list(params),
    queryFn: () => apiService.getContacts(params),
    select: (data) => data.data,
    enabled: false, // Only fetch when explicitly called (admin only)
  });
};

export const useContact = (id: string) => {
  return useQuery({
    queryKey: contactKeys.detail(id),
    queryFn: () => apiService.getContact(id),
    select: (data) => data.data,
    enabled: !!id,
  });
};

export const useContactStats = () => {
  return useQuery({
    queryKey: contactKeys.stats(),
    queryFn: () => apiService.getContactStats(),
    select: (data) => data.data,
    enabled: false, // Only fetch when explicitly called (admin only)
  });
};

export const useUpdateContactStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      apiService.updateContactStatus(id, status),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(contactKeys.detail(id));
      queryClient.invalidateQueries(contactKeys.lists());
      queryClient.invalidateQueries(contactKeys.stats());
      toast.success('Contact status updated successfully!');
    },
    onError: (error: any) => {
      const message = error.response?.data?.error || 'Failed to update contact status';
      toast.error(message);
    },
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => apiService.deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries(contactKeys.lists());
      queryClient.invalidateQueries(contactKeys.stats());
      toast.success('Contact deleted successfully!');
    },
    onError: (error: any) => {
      const message = error.response?.data?.error || 'Failed to delete contact';
      toast.error(message);
    },
  });
}; 