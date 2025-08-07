import { useQuery, useMutation, useQueryClient } from 'react-query';
import { apiService } from '../services/api';
import toast from 'react-hot-toast';

// Types
export interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  category: string;
  images: { url: string; alt: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  featuredImage: string;
  completionDate: string;
  status: string;
  difficulty: string;
  timeSpent: string;
  challenges: string[];
  learnings: string[];
  views: number;
  likes: number;
  formattedDate?: string;
  timeAgo?: string;
}

export interface ProjectStats {
  totalProjects: number;
  featuredProjects: number;
  totalViews: number;
  totalLikes: number;
  projectsByCategory: { _id: string; count: number }[];
  recentProjects: Project[];
}

// Query keys
export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
  list: (filters: any) => [...projectKeys.lists(), filters] as const,
  details: () => [...projectKeys.all, 'detail'] as const,
  detail: (id: string) => [...projectKeys.details(), id] as const,
  featured: () => [...projectKeys.all, 'featured'] as const,
  categories: () => [...projectKeys.all, 'categories'] as const,
  stats: () => [...projectKeys.all, 'stats'] as const,
};

// Hooks
export const useProjects = (params?: any) => {
  return useQuery({
    queryKey: projectKeys.list(params),
    queryFn: () => apiService.getProjects(params),
    select: (data) => data.data,
  });
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => apiService.getProject(id),
    select: (data) => data.data,
    enabled: !!id,
  });
};

export const useFeaturedProjects = (limit?: number) => {
  return useQuery({
    queryKey: projectKeys.featured(),
    queryFn: () => apiService.getFeaturedProjects(limit),
    select: (data) => data.data,
  });
};

export const useProjectCategories = () => {
  return useQuery({
    queryKey: projectKeys.categories(),
    queryFn: () => apiService.getProjectCategories(),
    select: (data) => data.data,
  });
};

export const useProjectStats = () => {
  return useQuery({
    queryKey: projectKeys.stats(),
    queryFn: () => apiService.getProjectStats(),
    select: (data) => data.data,
  });
};

export const useLikeProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => apiService.likeProject(id),
    onSuccess: (data, id) => {
      // Update the project in cache
      queryClient.setQueryData(projectKeys.detail(id), (old: any) => {
        if (old) {
          return {
            ...old,
            data: {
              ...old.data,
              likes: old.data.likes + 1,
            },
          };
        }
        return old;
      });
      
      // Update projects list
      queryClient.invalidateQueries(projectKeys.lists());
      
      toast.success('Project liked successfully!');
    },
    onError: () => {
      toast.error('Failed to like project');
    },
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Project>) => apiService.createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries(projectKeys.lists());
      queryClient.invalidateQueries(projectKeys.stats());
      toast.success('Project created successfully!');
    },
    onError: (error: any) => {
      const message = error.response?.data?.error || 'Failed to create project';
      toast.error(message);
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Project> }) =>
      apiService.updateProject(id, data),
    onSuccess: (data, { id }) => {
      queryClient.invalidateQueries(projectKeys.detail(id));
      queryClient.invalidateQueries(projectKeys.lists());
      queryClient.invalidateQueries(projectKeys.stats());
      toast.success('Project updated successfully!');
    },
    onError: (error: any) => {
      const message = error.response?.data?.error || 'Failed to update project';
      toast.error(message);
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => apiService.deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(projectKeys.lists());
      queryClient.invalidateQueries(projectKeys.stats());
      toast.success('Project deleted successfully!');
    },
    onError: (error: any) => {
      const message = error.response?.data?.error || 'Failed to delete project';
      toast.error(message);
    },
  });
}; 