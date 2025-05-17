// src/hooks/useFetchMainBranch.ts
import { useEffect, useState } from "react";

export interface Branch {
  name: string;
  commit: {
    sha: string;
    html_url: string;
    commit: {
      author: {
        name: string;
        date: string;
      };
      message: string;
    };
  };
  protected: boolean;
  _links: {
    html: string;
  };
}

interface UseFetchMainBranchReturn {
  branch: Branch | null;
  loading: boolean;
  name: string;
  sha: string;
  htmlUrl: string;
  author: string;
  date: string;
  message: string;
  link: string;
}

export default function useFetchMainBranch(): UseFetchMainBranchReturn {
  const [branch, setBranch] = useState<Branch | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMainBranch = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Guilhermefonseca2021/ProtoDesk/branches/main"
        );
        const data: Branch = await response.json();
        setBranch(data);
      } catch (error) {
        console.error("Erro ao buscar a branch main:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMainBranch();
  }, []);

  return {
    branch,
    loading,
    name: branch?.name || "",
    sha: branch?.commit.sha || "",
    htmlUrl: branch?.commit.html_url || "",
    author: branch?.commit.commit.author.name || "",
    date: branch?.commit.commit.author.date || "",
    message: branch?.commit.commit.message || "",
    link: branch?._links.html || "",
  };
}
