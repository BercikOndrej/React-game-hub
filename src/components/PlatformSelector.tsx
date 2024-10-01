import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Spinner } from "@/components/ui/spinner";

interface Props {
  onSelectPlatform: (platformSlug: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <Select
      onValueChange={(platformSlug) =>
        onSelectPlatform(
          data.find((platform) => platform.slug === platformSlug)!!
        )
      }
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Select a platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>
          {isLoading && <Spinner />}
          {data.map((platform) => (
            <SelectItem key={platform.id} value={platform.slug}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
