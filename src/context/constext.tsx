import { useQuery } from "@tanstack/react-query";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import { getTvShows, getActiveTvShow } from "../api/showsAPI";
import { TvShow, activeShow } from "../types";
interface TvContextType {
  searchShows: (showToSearch: string) => void;
  searchActiveShow: (showId: number) => void;
  tvShows: TvShow[];
  activeShow: activeShow;
  showsLoading: boolean;
  ActiveShowLoading: boolean;
}

export const TvContext = createContext<TvContextType | undefined>(undefined);

export const useTv = () => {
  const context = useContext(TvContext);
  if (!context) {
    throw new Error("TvContext must be used within a TvProvider");
  }
  return context;
};

interface TvProviderProps {
  children: ReactNode;
}

const TvProvider: FC<TvProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [activeShowId, setActiveShowId] = useState<number | null>(null);

  const {
    data: activeShow,
    isLoading: ActiveShowLoading,
    refetch: activeShowRefetch,
  } = useQuery({
    queryKey: ["activeTvShow", activeShowId],
    queryFn: () => getActiveTvShow(activeShowId),
    enabled: !!activeShowId,
  });

  const {
    data: tvShows,
    isLoading: showsLoading,
    refetch: showsRefetch,
  } = useQuery({
    queryKey: ["tvShows", searchValue],
    queryFn: () => getTvShows(searchValue),
    enabled: !!searchValue,
  });

  const searchShows = (showToSearch: string) => {
    setSearchValue(showToSearch);
    showsRefetch();
  };

  const searchActiveShow = (showId: number) => {
    setActiveShowId(showId);
    activeShowRefetch();
  };

  return (
    <TvContext.Provider
      value={{
        searchShows,
        searchActiveShow,
        tvShows,
        activeShow,
        showsLoading,
        ActiveShowLoading,
      }}
    >
      {children}
    </TvContext.Provider>
  );
};

export default TvProvider;
