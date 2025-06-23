import * as win from './remotecheck/remoteWin.js'
import * as mac from './remotecheck/remoteMac.js'
import * as linux from './remotecheck/remoteLin.js'

export function runRemoteCheck(platform = 'win32') {
  if (platform === 'win32') return win.runRemoteCheck()
  if (platform === 'darwin') return mac.runRemoteCheck()
  return linux.runRemoteCheck()
}
