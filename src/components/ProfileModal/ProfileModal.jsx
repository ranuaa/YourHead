import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {modalOpened}
      onClose = {() => setModalOpened(false)}
      size = '55%'
    >
      <form className='infoForm'>
        <h3>Your Info</h3>
        <div>

            <input 
                type="text" 
                className='infoInput'
                name='FirstName'
                placeholder='FirstName'
            />
            <input 
                type="date" 
                className='infoInput'
                name='birthday'
                placeholder='Birthday'
            />
        </div>

        <div>

        <input 
            type="email" 
            className='infoInput'
            name='email'
            placeholder='Email'
            />

        </div>

        <div>

        <input 
            type="text" 
            className='infoInput'
            name='livesIn'
            placeholder='Lives In'
        />

        <input 
            type="text" 
            className='infoInput'
            name='Country'
            placeholder='Country'
        />
        </div>

        <div>
        <input 
            type="text" 
            className='infoInput'
            name='status'
            placeholder='Status'
            />

        </div>

        <div>
            Profile Image
            <input type="file" name='profileImg' />
            <input type="file" name='coverImg' />
        </div>

        <button className="button infoButton">Submit</button>
      </form>
    </Modal>
  );
}

export default ProfileModal