import { IReactChildren } from '../interfaces/geral.interface';
import { AllClientsProvider } from './AllClients';
import { ClientProvider } from './Client';
import AccessClientApiProvider from './AccessClientApi';
import { IsInLoginPageProvider } from './IsInLoginPage';
import { IsLoggedInProvider } from './IsLoggedIn';
import { ModalEditClientIsOpenProvider } from './ModalEditClientIsOpen';
import { ModalCreateEmailIsOpenProvider } from './ModalCreateEmailIsOpen';
import { ModalCreatePhoneIsOpenProvider } from './ModalCreatePhoneIsOpen';
import { ModalNewClientIsOpenProvider } from './ModalNewClientIsOpen';
import AccessEmailApiProvider from './AccessEmailApi';
import AccessPhoneApiProvider from './AccessPhoneApi';

const Providers = ({ children }: IReactChildren) => {
  return (
    <IsInLoginPageProvider>
      <AccessClientApiProvider>
        <AccessEmailApiProvider>
          <AccessPhoneApiProvider>
            <AllClientsProvider>
              <ClientProvider>
                <ModalNewClientIsOpenProvider>
                  <ModalEditClientIsOpenProvider>
                    <ModalCreateEmailIsOpenProvider>
                      <ModalCreatePhoneIsOpenProvider>
                        <IsLoggedInProvider>{children}</IsLoggedInProvider>
                      </ModalCreatePhoneIsOpenProvider>
                    </ModalCreateEmailIsOpenProvider>
                  </ModalEditClientIsOpenProvider>
                </ModalNewClientIsOpenProvider>
              </ClientProvider>
            </AllClientsProvider>
          </AccessPhoneApiProvider>
        </AccessEmailApiProvider>
      </AccessClientApiProvider>
    </IsInLoginPageProvider>
  );
};

export default Providers;
