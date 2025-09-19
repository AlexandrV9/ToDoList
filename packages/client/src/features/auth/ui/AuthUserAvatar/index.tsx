import { UserAvatar } from "~/entities";
import { useAuthStore } from "../../useAuthStore";
import { Link } from "~/shared/ui";

export const AuthUserAvatar = () => {
  const { user } = useAuthStore(); // TODO: user всегда будет на зашищенных страницах

  return (
    <Link to="/profile">
      <UserAvatar userName={user!.name} src={user?.avatar} />
    </Link>
  );
};
