interface Props extends React.PropsWithChildren<{}> {
  title?: React.ReactNode;
  actionButtons?: React.ReactNode;
}

function BaseModal({ actionButtons, children }: Props) {
  return (
    <>
      <div className="grow overflow-auto p-6">{children}</div>

      {actionButtons && (
        <footer className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">{actionButtons}</footer>
      )}
    </>
  );
}

export default BaseModal;
