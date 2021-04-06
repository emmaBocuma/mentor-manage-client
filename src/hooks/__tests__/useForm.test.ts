import { ChangeEvent } from 'react';
import useForm from '../useForm';
import { renderHook, act } from '@testing-library/react-hooks';

interface TestValues {
  name: string;
}

const getMockFormEvent = (value: string = '') =>
  (({
    preventDefault: jest.fn(),
    target: { value },
  } as unknown) as ChangeEvent<any>);

describe('useForm hook', () => {
  it('sets initial values', () => {
    const testName = 'Sarah';
    const { result } = renderHook(() =>
      useForm<TestValues>({ initialValues: { name: testName } })
    );
    expect(result.current.data.name).toEqual(testName);
  });

  it('updates data with change event', () => {
    const testName = 'Sarah';
    const { result } = renderHook(() =>
      useForm<TestValues>({ initialValues: { name: testName } })
    );
    act(() => result.current.handleChange('name')(getMockFormEvent('Emma')));

    expect(result.current.data.name).toEqual('Emma');
  });

  it('validates required values', () => {
    const validationMsg = 'Please add a name';
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useForm<TestValues>({
        onSubmit,
        validations: {
          name: { required: { value: true, message: validationMsg } },
        },
      })
    );
    act(() => result.current.handleSubmit(getMockFormEvent()));

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(result.current.errors.name).toBe(validationMsg);
  });

  it('validates custom values', () => {
    const testName = 'John';
    const validationMsg = 'Please add a correct name';
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useForm<TestValues>({
        onSubmit,
        initialValues: { name: testName },
        validations: {
          name: {
            custom: {
              isValid: (value) => value === 'Sarah',
              message: validationMsg,
            },
          },
        },
      })
    );
    act(() => result.current.handleSubmit(getMockFormEvent()));
    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(result.current.errors.name).toBe(validationMsg);

    act(() => result.current.handleChange('name')(getMockFormEvent('Sarah')));
    act(() => result.current.handleSubmit(getMockFormEvent()));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(result.current.errors).toEqual({});
  });

  it('validates pattern values', () => {
    const testValue = 'A text string';
    const validationMsg = 'Please use numbers only';
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useForm<{ phone: string }>({
        onSubmit,
        initialValues: { phone: testValue },
        validations: {
          phone: {
            pattern: {
              value: /^[0-9]+$/,
              message: validationMsg,
            },
          },
        },
      })
    );
    act(() => result.current.handleSubmit(getMockFormEvent()));
    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(result.current.errors.phone).toBe(validationMsg);

    act(() => result.current.handleChange('phone')(getMockFormEvent('11')));
    act(() => result.current.handleSubmit(getMockFormEvent()));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(result.current.errors).toEqual({});
  });

  it('validates multiple values', () => {
    const nameValidationMsg = 'Please add a name';
    const phoneValidationMsg = 'Please use numbers only';
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useForm<{ phone: string; name: string }>({
        onSubmit,
        validations: {
          name: {
            required: {
              value: true,
              message: nameValidationMsg,
            },
          },
          phone: {
            pattern: {
              value: /^[0-9]+$/,
              message: phoneValidationMsg,
            },
          },
        },
      })
    );
    act(() => result.current.handleSubmit(getMockFormEvent()));
    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(result.current.errors.phone).toBe(phoneValidationMsg);
    expect(result.current.errors.name).toBe(nameValidationMsg);
  });

  it('calls onSubmit when no errors', () => {
    const testName = 'Sarah';
    const validationMsg = 'Please add a name';
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useForm<TestValues>({
        onSubmit,
        initialValues: { name: testName },
        validations: {
          name: { required: { value: true, message: validationMsg } },
        },
      })
    );
    act(() => result.current.handleSubmit(getMockFormEvent()));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(result.current.errors).toEqual({});
  });
});
