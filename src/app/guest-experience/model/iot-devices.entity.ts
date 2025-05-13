export interface IotDevice {
  id: number;
  name: string;
  type: string;
  customizable: boolean;
  properties: Record<string, any>;
}

export function createIotDevice(data: Partial<IotDevice> = {}): IotDevice {
  return {
    id: data.id ?? 0,
    name: data.name ?? '',
    type: data.type ?? 'unknown',
    customizable: data.customizable ?? false,
    properties: data.properties ?? {}
  };
}
