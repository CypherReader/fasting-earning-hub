import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Play, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { videos, categoryFilters, channels, Video } from '@/data/videos';
import VideoCard from '@/components/videos/VideoCard';
import VideoPlayer from '@/components/videos/VideoPlayer';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Videos = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [playerOpen, setPlayerOpen] = useState(false);

  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesSearch = searchQuery === '' ||
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredVideos = videos.filter(v => v.featured).slice(0, 3);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setPlayerOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all';
  const currentCategory = categoryFilters.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2"
          >
            <Play className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Fasting Science</span>
          </button>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => navigate('/recipes')}>
              Recipes
            </Button>
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Learn About Fasting
          </h1>
          <p className="text-muted-foreground">
            Expert-backed videos on the science and benefits of fasting
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-card border-border text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            {/* Mobile Dropdown */}
            <div className="lg:hidden mb-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {currentCategory?.emoji} {currentCategory?.label}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {categoryFilters.map((category) => (
                    <DropdownMenuItem
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(selectedCategory === category.id && 'bg-secondary/20')}
                    >
                      {category.emoji} {category.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block space-y-2 sticky top-24">
              <h3 className="font-semibold text-foreground mb-3">Categories</h3>
              {categoryFilters.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left',
                    selectedCategory === category.id
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span>{category.emoji}</span>
                  <span>{category.label}</span>
                </button>
              ))}

              {/* Featured Channels */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">Featured Experts</h3>
                <div className="space-y-2">
                  {channels.slice(0, 5).map((channel) => (
                    <div key={channel.id} className="flex items-center gap-2 text-sm">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xs font-bold text-muted-foreground">
                          {channel.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground truncate">{channel.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Videos (only show when no filters) */}
            {!hasActiveFilters && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Featured Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featuredVideos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onClick={() => handleVideoClick(video)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''} found
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-secondary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Video Grid */}
            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onClick={() => handleVideoClick(video)}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No videos found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or category filter
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayer
        video={selectedVideo}
        open={playerOpen}
        onClose={() => setPlayerOpen(false)}
        onVideoSelect={(video) => setSelectedVideo(video)}
      />
    </div>
  );
};

export default Videos;
