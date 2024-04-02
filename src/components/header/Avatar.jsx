import { CopyIcon } from "@radix-ui/react-icons"
import {
  IconButton,
  Popover,
  Flex,
  Box,
  Button,
  Avatar as RadixAvatar,
  Badge,
  Code,
  DataList,
  Link,
} from "@radix-ui/themes"
import useUserStore from "../../store/user.store"

export default function Avatar() {
  const username = useUserStore(
    (store) => store.info.username
  )
  const removeUser = useUserStore(
    (store) => store.removeUser
  )

  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton radius="full">
          <RadixAvatar
            fallback={username.charAt(0).toUpperCase()}
            src={username}
            className="user-avatar"
          />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content width="360px">
        <Flex gap="3">
          <Box flexGrow="1">
            <UserInfo />
            <Flex gap="3" mt="3" justify="end">
              <Popover.Close>
                <Button
                  size="1"
                  color="red"
                  onClick={removeUser}
                >
                  Logout
                </Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

function UserInfo() {
  const user = useUserStore((user) => user.info)
  const copyId = () => {
    navigator.clipboard.writeText(user.username)
  }

  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">
          Status
        </DataList.Label>
        <DataList.Value>
          <Badge
            color={
              user.blocked
                ? "red"
                : user.confirmed
                ? "jade"
                : "orange"
            }
            variant="soft"
            radius="full"
          >
            {user.blocked
              ? "Blocked"
              : user.confirmed
              ? "Confirmed"
              : "Pending"}
          </Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">ID</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">{user.username}</Code>
            <IconButton
              size="1"
              aria-label="Copy value"
              color="gray"
              variant="ghost"
              onClick={copyId}
            >
              <CopyIcon />
            </IconButton>
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">
          Name
        </DataList.Label>
        <DataList.Value>
          {user.firstName} {user.lastName}
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">
          Email
        </DataList.Label>
        <DataList.Value>
          <Link href={`mailto:${user.email}`}>
            {user.email}
          </Link>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">
          Provider
        </DataList.Label>
        <DataList.Value>{user.provider}</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  )
}
