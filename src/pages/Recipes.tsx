import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { recipes, dietFilters, mealTypeFilters, Recipe, DietType, MealType } from '@/data/recipes';
import RecipeCard from '@/components/recipes/RecipeCard';
import RecipeDetail from '@/components/recipes/RecipeDetail';
import { cn } from '@/lib/utils';

const Recipes = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');
  const [selectedMealType, setSelectedMealType] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Diet filter
      const matchesDiet = selectedDiet === 'all' || recipe.dietType === selectedDiet;

      // Meal type filter
      const matchesMealType = selectedMealType === 'all' || recipe.mealType === selectedMealType;

      return matchesSearch && matchesDiet && matchesMealType;
    });
  }, [searchQuery, selectedDiet, selectedMealType]);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setDetailOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDiet('all');
    setSelectedMealType('all');
  };

  const hasActiveFilters = searchQuery || selectedDiet !== 'all' || selectedMealType !== 'all';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2"
          >
            <ChefHat className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Recipes</span>
          </button>
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Recipes & Meal Ideas
          </h1>
          <p className="text-muted-foreground">
            Delicious meals to break your fast right
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="sticky top-[73px] z-30 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-border mb-6">
          {/* Search */}
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className={cn(showFilters && 'border-secondary text-secondary')}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Diet Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {dietFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedDiet(filter.id)}
                className={cn(
                  'px-4 py-2 rounded-full border whitespace-nowrap transition-all text-sm font-medium',
                  selectedDiet === filter.id
                    ? 'bg-secondary text-secondary-foreground border-secondary shadow-emerald-glow'
                    : 'bg-transparent border-border text-muted-foreground hover:border-secondary/50'
                )}
              >
                {filter.emoji} {filter.label}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="pt-4 border-t border-border mt-4"
            >
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Meal Type</label>
                  <div className="flex gap-2">
                    {mealTypeFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedMealType(filter.id)}
                        className={cn(
                          'px-3 py-1.5 rounded-lg border text-sm transition-all',
                          selectedMealType === filter.id
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-transparent border-border text-muted-foreground hover:border-primary/50'
                        )}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-secondary hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => handleRecipeClick(recipe)}
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
              <ChefHat className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No recipes found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </motion.div>
        )}
      </main>

      {/* Recipe Detail Modal */}
      <RecipeDetail
        recipe={selectedRecipe}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
      />
    </div>
  );
};

export default Recipes;
